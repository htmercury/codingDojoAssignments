from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
   
from .models import User

# Create your views here.

def home(request):
    return redirect('/users')

def index(request):
    query = User.objects.all().values()
    context = {
        'users': query
    }
    return render(request,'users/index.html', context)

def new(request):
    context = {
        'title': 'Add a new user',
        'links': ['<a href="/">Go Back</a>'],
        'first_name': request.session['first_name'] if 'first_name' in request.session else '',
        'last_name': request.session['last_name'] if 'last_name' in request.session else '',
        'email': request.session['email'] if 'email' in request.session else '',
        'name': 'Create',
        'action': '/users/create'
    }
    if 'first_name' in request.session:
        del request.session['first_name']
    if 'last_name' in request.session:
        del request.session['last_name']
    if 'email' in request.session:
        del request.session['email']
    return render(request, 'users/change.html', context)

def create(request):
    if request.method == 'POST':
        request.session['first_name'] = request.POST['first_name']
        request.session['last_name'] = request.POST['last_name']
        request.session['email'] = request.POST['email']
        errors = User.objects.validation(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect('/users/new')
        else:
            u = User()
            u.first_name = request.POST['first_name']
            u.last_name = request.POST['last_name']
            u.email = request.POST['email']
            u.save()
            messages.success(request, "User successfully created")
            return redirect('/users')

def edit(request, user_id):
    query = User.objects.get(id=user_id).__dict__
    print(query)
    context = {
        'title': f'Edit user {user_id}',
        'links': [f'<a href="/users/{user_id}">Show</a>', '<div class="sep"></div>' ,'<a href="/">Go Back</a>'],
        'first_name': query['first_name'],
        'last_name': query['last_name'],
        'email': query['email'],
        'action': '/users/update',
        'name': 'Update',
        'id' : user_id
    }
    return render(request, 'users/change.html', context)

def update(request):
    print(request.POST['id'])
    errors = User.objects.update_validation(request.POST)
    if len(errors):
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect(f'/users/{request.POST["id"]}/edit')
    else:
        u = User.objects.get(id=request.POST['id'])
        u.first_name = request.POST['first_name']
        u.last_name = request.POST['last_name']
        u.email = request.POST['email']
        u.save()
        return redirect('/users')

def show(request, user_id):
    query = User.objects.get(id=user_id)
    context = {
        'user': query,
        'links': [f'<a href="/users/{user_id}/edit">Edit</a>', '<div class="sep"></div>', f'<a href="/users/{user_id}/destroy">Delete</a>', '<div class="sep"></div>', '<a href="/">Go Back</a>']
    }
    return render(request, 'users/show.html', context)

def delete(request, user_id):
    u = User.objects.get(id=user_id)
    u.delete()
    return redirect('/users')
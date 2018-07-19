from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User
import bcrypt

# Create your views here.
def index(request):
    if 'userid' in request.session:
        return redirect('/show')
    query = User.objects.all().values()
    context = {
        'users': query,
        'first_name': request.session['first_name'] if 'first_name' in request.session else '',
        'last_name': request.session['last_name'] if 'last_name' in request.session else '',
        'email': request.session['email'] if 'email' in request.session else '',
    }
    if 'first_name' in request.session:
        del request.session['first_name']
    if 'last_name' in request.session:
        del request.session['last_name']
    if 'email' in request.session:
        del request.session['email']
    return render(request,'account/index.html', context)

def register(request):
     if request.method == 'POST':
        request.session['first_name'] = request.POST['first_name']
        request.session['last_name'] = request.POST['last_name']
        request.session['email'] = request.POST['email']
        errors = User.objects.validation(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect('/')
        else:
            u = User()
            u.first_name = request.POST['first_name']
            u.last_name = request.POST['last_name']
            u.email = request.POST['email']
            pw_hash = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
            print(pw_hash)
            u.password = pw_hash
            u.save()
            u = User.objects.filter(email=request.POST['email'])[0]
            request.session['userid'] = u.id
            messages.success(request, "User successfully created")
            return redirect('/show')

def show(request):
    if 'userid' not in request.session:
        return redirect('/')
    query = User.objects.get(id=request.session['userid'])
    context = {
        'user': query
    }
    return render(request, 'account/show.html', context)

def logout(request):
    if 'userid' in request.session:
        del request.session['userid']
    return redirect('/')

def login(request):
    user = User.objects.filter(email=request.POST['email'])
    if user and bcrypt.checkpw(request.POST['password'].encode(), user[0].password.encode()):
        print("password match")
        request.session['userid'] = user[0].id
    else:
        print("failed password")
        messages.error(request, "Either email or password is incorrect!", extra_tags="error login")
    return redirect('/')
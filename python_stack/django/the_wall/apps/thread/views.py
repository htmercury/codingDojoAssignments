from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import *
import bcrypt

# Create your views here.

def index(request):
    if 'userid' in request.session:
        messages = Message.objects.all().values('id','poster__id','poster__first_name', 'poster__last_name', 'content', 'created_at').order_by('-created_at')
        comments = Comment.objects
        dashboard = []
        for message in messages:
            content = {
                'message':message,
                'comments':comments.filter(message_id=message['id']).values('id','commenter__id','commenter__first_name','commenter__last_name','content','created_at')
            }
            dashboard.append(content)
        u = User.objects.get(id = request.session['userid'])
        context = {
            'dashboard': dashboard,
            'name': u.first_name
        }
        print(dashboard[0])
        return render(request, 'thread/home.html', context)
    context = {
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
    return render(request,'thread/index.html', context)

def register(request):
     if request.method == 'POST':
        request.session['first_name'] = request.POST['first_name']
        request.session['last_name'] = request.POST['last_name']
        request.session['email'] = request.POST['email']
        errors = User.objects.validation(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
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
        return redirect('/')

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
    messages.success(request, "User successfully logged in!")
    return redirect('/')

def post(request):
    if request.method == 'POST':
        errors = Message.objects.validation(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
        else:
            poster = User.objects.get(id=request.session['userid'])
            m = Message()
            m.content = request.POST['message']
            m.poster = poster
            m.save()
    return redirect('/')

def comment(request, message_id):
    if request.method == 'POST':
        errors = Comment.objects.validation(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
        else:
            message = Message.objects.get(id=message_id)
            commenter = User.objects.get(id=request.session['userid'])
            c = Comment()
            c.content = request.POST['comment']
            c.commenter = commenter
            c.message = message
            c.save()
    return redirect('/')

def delete_message(request, message_id):
    m = Message.objects.get(id=message_id)
    if (m.poster_id == request.session['userid']):
        m.delete()
    return redirect('/')

def delete_comment(request, comment_id):
    c = Comment.objects.get(id=comment_id)
    if (c.commenter_id == request.session['userid']):
        c.delete()
    return redirect('/')
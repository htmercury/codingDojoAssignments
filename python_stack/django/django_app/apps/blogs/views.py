from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
    response = "placeholder to later display all the list of blogs"
    return HttpResponse(response)

def new(request):
    response = "placeholder to display a new form to create a new blog"
    return HttpResponse(response)

def create(request):
    return redirect('/')

def show(request):
    print(request.path)
    response = f"placeholder to display blog {request.path[1:]}"
    return HttpResponse(response)

def edit(request):
    response = f"placeholder to edit blog {request.path[1:-5]}"
    return HttpResponse(response)

def destroy(request):
    return redirect('/')
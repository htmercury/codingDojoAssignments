from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Course

# Create your views here.
def redirect_home(request):
    return redirect('/courses')

def index(request):
    query = Course.objects.all().values()
    if 'desc' not in request.session:
        request.session['desc'] = ''
    context = {
        'courses': query,
        'desc': request.session['desc']
    }
    del request.session['desc']
    return render(request, 'dashboard/index.html', context)

def confirm(request, course_id):
    c = Course.objects.get(id=course_id)
    context = {
        'course': c
    }
    return render(request, 'dashboard/confirm.html', context)

def destroy(request, course_id):
    c = Course.objects.get(id=course_id)
    c.delete()
    return redirect('/courses')

def create(request):
    if request.method == 'POST':
        request.session['name'] = request.POST['name']
        request.session['desc'] = request.POST['desc']
        errors = Course.objects.validation(request.POST)
        if len(errors):
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
        else:
            c = Course()
            c.name = request.POST['name']
            c.desc = request.POST['desc']
            c.save()
        return redirect('/courses')
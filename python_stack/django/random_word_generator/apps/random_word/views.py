from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

# Create your views here.

def index(request):
    return redirect('/random_word')

def random_word(request):
    if 'num' not in request.session:
        request.session['num'] = 1
    if 'code' not in request.session:
        request.session['code'] = get_random_string(length=14)
    context = {
        'num': request.session['num'],
        'code': request.session['code']
    }
    return render(request, 'random_word/index.html', context)

def generate(request):
    request.session['code'] = get_random_string(length=14)
    request.session['num'] += 1
    return redirect('/random_word')

def reset(request):
    request.session['num'] = 1
    return redirect('/random_word')
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    if 'name' not in request.session:
        request.session['name'] = ''
    if 'location' not in request.session:
        request.session['location'] = 'San Jose'
    if 'language' not in request.session:
        request.session['language'] = 'Python'
    if 'comment' not in request.session:
        request.session['comment'] = ''
    if 'count' not in request.session:
        request.session['count'] = 0
    context = {
        'name':request.session['name'],
        'location':request.session['location'],
        'language':request.session['language'],
        'comment':request.session['comment'],
        'count':request.session['count']
    }
    return render(request, 'survey/index.html', context)

def process(request):
    if request.method == 'POST':
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']
        request.session['count'] += 1
        return redirect('/result')
    return redirect('/')

def result(request):
    context = {
        'name':request.session['name'],
        'location':request.session['location'],
        'language':request.session['language'],
        'comment':request.session['comment'],
        'count':request.session['count']
    }
    return render(request, 'survey/result.html', context)
from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime
from pytz import timezone

# Create your views here.
def index(request):
    if 'words' not in request.session:
        request.session['words'] = []
    print(request.session['words'])
    return render(request, 'words/index.html')

def process(request):
    if request.method == 'POST' and request.POST['word'] != '':
        print(request.POST)
        font_size = request.POST['font_size'] if 'font_size' in request.POST else '16px'
        new_word = f'<p style="font-size:{font_size}; color:{request.POST["color_radio"]}">{request.POST["word"]}</p>'
        fmt = "%Y-%m-%d %H:%M %p"
        now_time = datetime.now(timezone('America/Chicago'))
        now_time = now_time.strftime(fmt)
        new_time = f'<p> - added on {now_time}</p>'
        entry = (new_word, new_time)
        words = request.session['words']
        words.append(entry)
        request.session['words'] = words
    return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')
from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime
from pytz import timezone

# Create your views here.

def index(request):
    fmt = "%Y-%m-%d %H:%M %p"
    now_time = datetime.now(timezone('America/Chicago'))
    context = {
        "time": now_time.strftime(fmt)
    }
    return render(request,'./show_time/index.html', context)

def time_display(request):
    return redirect('/')
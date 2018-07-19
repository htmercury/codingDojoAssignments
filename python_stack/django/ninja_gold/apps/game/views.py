from django.shortcuts import render, HttpResponse, redirect
from datetime import date, time, datetime
import random

# Create your views here.
def index(request):
    if 'log' not in request.session:
        request.session['log'] = []
    if 'gold' not in request.session:
        request.session['gold'] = 0
    context = {
        'log': request.session['log'],
        'gold': request.session['gold']
    }
    print(context['log'])
    return render(request, 'game/index.html', context)

def process_money(request):
    if request.method == 'POST':
        today = datetime.now()
        lower = int(request.POST['lower'])
        upper = int(request.POST['upper'])
        location = request.POST['location']
        gold_earned = random.randrange(lower, upper)
        result = ''
        if gold_earned > 0:
            result = f'<p style="color:#809277">Earned {gold_earned} golds from the {location}! ({today})</p>'
        else:
            result = f'<p style="color:#c96a6d">Entered a {location} and lost {-gold_earned} golds... Ouch... ({today})</p>'
        log = request.session['log']
        log.append(result)
        request.session['gold'] += gold_earned
        request.session['log'] = log
        return redirect('/')

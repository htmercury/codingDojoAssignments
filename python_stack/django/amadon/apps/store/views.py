from django.shortcuts import render, HttpResponse, redirect
from .models import Item, Customer, Transaction

# Create your views here.
def redirect_home(request):
    return redirect('/amadon')

def index(request):
    query = Item.objects.all().values()
    context = {
        'items': query
    }
    return render(request, 'store/index.html', context)

def buy(request):
    if request.method == 'POST' and 0 < int(request.POST['id']) < 5:
        print('id:',request.POST['id'])
        c = Customer.objects.get(id=1)
        i = Item.objects.get(id=int(request.POST['id']))
        if Transaction.objects.filter(customer=c,item=i).exists():
            print('yes')
            t = Transaction.objects.get(customer=c,item=i)
            t.amount_purchased += int(request.POST['amount'])
            t.save()
        else:
            Transaction.objects.create(customer=c,item=i,amount_purchased=1)
        c.checkout = (i.price * int(request.POST['amount']))
        c.total_ordered += int(request.POST['amount'])
        c.balance += (i.price * int(request.POST['amount']))
        c.save()
        return redirect('/amadon/checkout')
    else:
        return redirect('/amadon')

def checkout(request):
    c = Customer.objects.get(id=1)
    context = c.__dict__
    context['purchases'] = c.purchases.values()
    print(context)
    return render(request, 'store/checkout.html', context)

def reset(request):
    c = Customer.objects.get(id=1)
    c.balance = 0
    c.total_ordered = 0
    c.checkout = 0
    c.purchases.clear()
    c.save()
    return redirect('/amadon')
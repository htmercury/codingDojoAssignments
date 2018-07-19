from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.redirect_home),
    url(r'^amadon$', views.index),
    url(r'^amadon/buy$', views.buy),
    url(r'^amadon/checkout$', views.checkout),
    url(r'^reset$', views.reset),
]
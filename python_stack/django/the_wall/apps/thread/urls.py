from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^logout$', views.logout),
    url(r'^post$', views.post),
    url(r'^(?P<message_id>\d+)/comment$', views.comment),
    url(r'^delete/message/(?P<message_id>\d+)', views.delete_message),
    url(r'^delete/comment/(?P<comment_id>\d+)$', views.delete_comment),
]

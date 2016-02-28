from django.conf.urls import url
from RestApi import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^judge/$', views.JudgeList.as_view()),
    url(r'^judge/(?P<id>[0-9]+)/$', views.JudgeSingle.as_view()),

    url(r'^debter/$', views.DebterList.as_view()),
    url(r'^debter/(?P<id>[0-9]+)/$', views.DebterSingle.as_view()),

    url(r'^court/$', views.CourtList.as_view()),
    url(r'^court/(?P<id>[0-9]+)/$', views.CourtSingle.as_view()),

    url(r'^comissioner/$', views.ComissionerList.as_view()),
    url(r'^comissioner/(?P<id>[0-9]+)/$', views.ComissionerSingle.as_view()),

    url(r'^act/$', views.ActList.as_view()),
    url(r'^act/(?P<id>[0-9]+)/$', views.ActSingle.as_view()),

]
urlpatterns = format_suffix_patterns(urlpatterns)
from django.conf.urls import url
from RestApi import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^judge/$', views.judgeList),
    url(r'^judge/(?P<id>[0-9]+)/$', views.judgeSingle),

    url(r'^debter/$', views.debterList),
    url(r'^debter/(?P<id>[0-9]+)/$', views.debterSingle),

    url(r'^court/$', views.courtList),
    url(r'^court/(?P<id>[0-9]+)/$', views.courtSingle),

    url(r'^comissioner/$', views.comissionerList),
    url(r'^comissioner/(?P<id>[0-9]+)/$', views.comissionerSingle),

    url(r'^act/$', views.actList),
    url(r'^act/(?P<id>[0-9]+)/$', views.actSingle),

]
urlpatterns = format_suffix_patterns(urlpatterns)
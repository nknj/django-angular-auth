from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'backend.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^api/register/$', 'auth2.views.register'),
    url(r'^api/login/$', 'auth2.views.login'),
    url(r'^api/logout/$', 'auth2.views.logout'),
    url(r'^admin/', include(admin.site.urls)),
)

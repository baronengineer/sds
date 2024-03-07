from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.




class Home(TemplateView):
    template_name = "about/index.html"

    def get_context_data(self, **kwargs):
        input_string = self.kwargs.get('input_string') 
        context = super().get_context_data(**kwargs)
        if input_string in kwargs:
            context.update({
            'judul':'about',
            'mydata': 'data',
            'input_string': input_string,
        })
        else:
            context.update({
            'judul':'about',
            'mydata': 'data',
            
        })
        return context
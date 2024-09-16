from django.core.mail import send_mail
from django.conf import settings

def send_welcome_email(to_email, userId, SociogramId):
    subject = 'Access to the Sociogram survey'
    url = f"http://localhost:5173/user_form/{userId}-{SociogramId}"
    message = f'''
    Hello!,

    Your teacher has sent you access to the survey for creating a Sociogram. 
    You can only complete the survey once, so please answer carefully. 
    You can access the survey by clicking on the link below.

    {url}

    Best regards,
    The Sociogram Team
    '''
    
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [to_email]
    
    send_mail(subject, message, email_from, recipient_list, fail_silently=False)
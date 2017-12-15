FROM python:3.6.2
MAINTAINER winhtaikaung(win@getperx.com)

#Copying app to docker folder
RUN mkdir -p /opt/pasarana_pwa/dist/
WORKDIR /opt/pasarana_pwa/

COPY dist/. /opt/pasarana_pwa/dist
ADD server.py /opt/pasarana_pwa/
ADD requirements.txt /opt/pasarana_pwa/
RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["python3.6","server.py"]

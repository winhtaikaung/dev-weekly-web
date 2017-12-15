docker build ./ -t pasarana_pwa
docker stop pasarana_pwa || true && docker rm pasarana_pwa||true & docker run -p 80:5000  --name pasarana_pwa  pasarana_pwa

VERSION=`git describe --always`

echo $VERSION

docker build . -t orsondc/portfolio2024 && \
docker push orsondc/portfolio2024
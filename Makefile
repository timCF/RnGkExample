all:
	lsc --compile --const ./app.ls ./index.ios.ls ./index.android.ls
	mv ./index.ios ./index.ios.js
	mv ./index.android ./index.android.js
	#rm -rf ./app/js && mkdir ./app/js
	pushd ./app && lsc --compile --const ./*.ls && mv ./*.js ./js/ && popd

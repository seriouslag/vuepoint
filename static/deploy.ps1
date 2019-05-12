param(
    [string]$firebaseToken,
    [string]$firebaseProject,
    [string]$releaseMessage
)

npm i -g firebase-tools
write-host "starting deploy...";
firebase --version;
firebase deploy --token $firebaseToken --project $firebaseProject --message "Release: $releaseMessage";
write-host "deployment completed";

Pop-Location
param(
    [string]$firebaseToken,
    [string]$firebaseProject
)

write-host "Installing firebase tools...";
npm i -g firebase-tools
write-host "starting deploy...";
firebase --version;
write-host "dir: $dir";
firebase deploy --token $firebaseToken --project $firebaseProject;
write-host "deployment completed";

Pop-Location
param(
    [string]$firebaseToken,
    [string]$firebaseProject
)

$dir = Split-Path $MyInvocation.MyCommand.Path
write-host "dir: $dir";

$a12="$firebaseToken";
$a13="$firebaseProject";

write-host "vars $($a12 -split '') $($a13 -split '')";

write-host "Installing firebase tools...";
npm i -g firebase-tools
write-host "starting deploy...";
firebase --version;
write-host "dir: $dir";
firebase deploy --token $firebaseToken --project $firebaseProject;
write-host "deployment completed";

Pop-Location
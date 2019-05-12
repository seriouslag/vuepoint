param(
    [string]$firebaseToken,
    [string]$firebaseProject,
    [string]$releaseMessage
)

$dir = Split-Path $MyInvocation.MyCommand.Path
write-host "dir: $dir";
write-host "working dir: $(System.DefaultWorkingDirectory)"

$a12 = $firebaseToken;
$a13 = $firebaseProject;

write-host "vars $a12 $a13";

write-host "Installing firebase tools...";
npm i -g firebase-tools
write-host "starting deploy...";
firebase --version;
firebase deploy --token $firebaseToken --project $firebaseProject --message "Release: $releaseMessage";
write-host "deployment completed";

Pop-Location
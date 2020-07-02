import os
commitMessage=input("commit message:")
commitMessage='\"'+commitMessage+'\"'
os.system("git add .")
os.system("git commit -m "+commitMessage)
os.system("git push origin master")

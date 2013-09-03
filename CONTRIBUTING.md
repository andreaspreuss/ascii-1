Contributing
=========

If you would like to contribute to this project please read through this document carefully
These arent *rules*, rather best practices. We would really appreciate it if you followed these..

####Steps
- Fork the repository
- Create an issue about the new feature you want to implement/choose from one of the issues already present
- Discuss the issue on github, and comment on it saying you are working on an implementation. 
- Code in a __new git branch__
- Include the issue number in the last commit (e.g implemented foo; Issue #X)
- Fetch changes from upstream and rebase (resolve any conflicts if present)
- Include any other relevant information in the pull request, like libraries used, etc. 
- Send the pull request, do any modifications if needed.
- When the pull request gets accepted and merged, add your name to the README.md :)

####Workflow in Shell
- Fork the repository.

```bash
git clone https://github.com/yourUsername/ascii
cd ascii
git remote add upstream https://github.com/cufe/ascii

# Create your feature branch
git checkout -b my-feature

# ... make changes, commit

# synchronize with upstream

# pull changes
git fetch upstream

# merge changes into master
git checkout master
git merge upstream/master

# update your github fork
git push origin master

# return to your feature branch and rebase onto master
git checkout my-feature
git rebase master

# .. resolve conflicts if any

# push the rebased branch to github
git push origin my-feature -f
```

####Code guidelines
Make sure all your code passes a validation check. (W3C Validator, JSHint)

*HTML:*
Use **2 spaces** for indentation. 

```html
<div>
  <a href="#">Foo</a>
  <p>
    Long... 
    Multiline...
    Text....
  </p>
</div>
```

*CSS:*
Use **4 spaces** for indentation.

```css
.foo bar {
    background: red;
    padding: 0px 1px 5px 2px;
    display: none;
}
```

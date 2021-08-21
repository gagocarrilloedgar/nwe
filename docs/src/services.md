## Constants

<dl>
<dt><a href="#path">path</a></dt>
<dd><p>Questions to use for the CLI UIHBNHG</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#inquire">inquire(question)</a> ⇒ <code>function</code></dt>
<dd><p>Triggers the inquierer library</p>
</dd>
<dt><a href="#inquireRepositoryData">inquireRepositoryData()</a> ⇒ <code>Object</code></dt>
<dd><p>Triggers inquirer when yes/no  needs to be answered</p>
</dd>
<dt><a href="#pushFolderToRepo">pushFolderToRepo(url, dir)</a> ⇒ <code>Bolean</code></dt>
<dd><p>Pushed the folder to the reppo after being cloned</p>
</dd>
<dt><a href="#cloneRepo">cloneRepo(url, repoName)</a></dt>
<dd><p>Clones and inits the repository from a given url</p>
</dd>
<dt><a href="#push">push()</a> ⇒</dt>
<dd><p>Executes git push</p>
</dd>
<dt><a href="#pushOrigin">pushOrigin()</a></dt>
<dd><p>Finds the current branch name and exectures push origin name</p>
</dd>
<dt><a href="#addCommit">addCommit(description)</a></dt>
<dd><p>Combined command that executes add . + commit --m &quot;description&quot;</p>
</dd>
<dt><a href="#branchAndCheck">branchAndCheck(name)</a></dt>
<dd><p>Combined command that executes branch name + checkout name</p>
</dd>
</dl>

<a name="path"></a>

## path
Questions to use for the CLI UIHBNHG

**Kind**: global constant  
<a name="inquire"></a>

## inquire(question) ⇒ <code>function</code>
Triggers the inquierer library

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| question | <code>Object</code> | set of questions passed to be answered |

<a name="inquireRepositoryData"></a>

## inquireRepositoryData() ⇒ <code>Object</code>
Triggers inquirer when yes/no  needs to be answered

**Kind**: global function  
<a name="pushFolderToRepo"></a>

## pushFolderToRepo(url, dir) ⇒ <code>Bolean</code>
Pushed the folder to the reppo after being cloned

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | github repository url |
| dir | <code>String</code> | directory name |

<a name="cloneRepo"></a>

## cloneRepo(url, repoName)
Clones and inits the repository from a given url

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | github repository url |
| repoName | <code>String</code> | repositry name |

<a name="push"></a>

## push() ⇒
Executes git push

**Kind**: global function  
**Returns**: the shell execution command  
<a name="pushOrigin"></a>

## pushOrigin()
Finds the current branch name and exectures push origin name

**Kind**: global function  
<a name="addCommit"></a>

## addCommit(description)
Combined command that executes add . + commit --m "description"

**Kind**: global function  

| Param | Type |
| --- | --- |
| description | <code>String</code> | 

<a name="branchAndCheck"></a>

## branchAndCheck(name)
Combined command that executes branch name + checkout name

**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 


//tagname // div
//tagname[@attribute='value'] //input[@name='username']
//tagname[text()='text']
//parent/child
//parent//descendant  //div//span - select all child or grandchild
//child/..  //parent
//tagname[position()]  // li[1]
//tagname[contains(@attribute, 'substring')]
//tagname[contains(text(), 'partial text')]
//tagname[@attribute1='value1' and @attribute2='value2']
//tagname/following-sibling::p
//tagname/preceding-sibling::p
//tagname/following::p
//tagname/preceding::p
//parent/child[1]
//parent/child[last()]
//ul/li[position()=2]
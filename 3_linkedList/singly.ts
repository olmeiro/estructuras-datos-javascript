class MyNode {
  value: String | Number | Array<any>;
  next: any;
  constructor(value: String | Number | Array<any>) {
    this.value = value;
    this.next = null;
  }
}

// Singly linked list
class MyLinkList {
  public head: MyNode;
  public tail: MyNode;
  public length: number;
  constructor(value: String | Number | Array<any>) {
    this.head = new MyNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: String | Number | Array<any>) {
    const newNode = new MyNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  preppend(value: String | Number | Array<any>) {
    const newNode = new MyNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

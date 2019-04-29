import linkedListNode from './linkedListNode';

export default class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	append(value) {
		// Create new node
		const newNode = new Node(element);
		
		//If list is empty add new one, and make it as head
		!this.head && ( this.head = newNode; this.tail = newNode; return this; ) 

		// Attach new node to the end of list
		this.tail.next = newNode;
		this.tail = newNode;

		return this;
	}

	delete(value) {
		!this.head && return null;

		let deletedNode = null;
	}
}
#pragma strict

function Start () {

	var transform = GetComponent.<Transform>();

}

function Update () {

	if ( Input.GetKey ("a") ) {

		transform.position.x += 0.1;

	}

	if ( Input.GetKey ("d") ) {

		transform.position.x -= 0.1;

	}

	if ( Input.GetKey ("w") ) {

		transform.position.y += 0.1;

	}


}
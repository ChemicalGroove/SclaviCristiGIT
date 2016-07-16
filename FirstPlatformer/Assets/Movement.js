#pragma strict

	

function Start () {

	var transform = GetComponent.<Transform>();

}

function Update () {

	
	if ( Input.GetKey ("d") ) {


		GetComponent.<Animation>().CrossFade("WalkSclav");
		transform.position.x += 0.03;

	}

	if ( Input.GetKey ("a") ) {


		transform.position.x -= 0.03;

	}

	if ( Input.GetKey ("w") ) {


		transform.position.y += 0.03;

	}


}
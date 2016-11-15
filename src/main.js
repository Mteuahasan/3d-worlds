var app = {
  init: function () {
    this.clock = new THREE.Clock()
    this.initScene()
    this.initCamera()
    this.initLights()
    this.initControls()
    this.initMeshs()
    this.initRender()
    this.animLoop()
  },

  scene: new THREE.Scene(),
  geometry: null,
  material: null,
  mesh: null,
  extrudeSettings: {
    amount: 1,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 1,
    bevelThickness: 1
  },
  loader: new THREE.JSONLoader(),
  renderer: new THREE.WebGLRenderer(),
  controls: null,
  clock: null,
  mixer: null,
  floater: new THREE.Group(),
  parent: new THREE.Object3D(),
  camera: new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 ),

  initScene: function () {
    this.scene.background = new THREE.Color( 0x000000 )
  },

  initCamera: function () {
  	this.camera.position.z = 400
  },

  initMeshs: function () {
    var self = this
    // Ground
  	this.geometry = new THREE.BoxBufferGeometry( 500, 20, 500 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0x443c22 } )
  	this.mesh = new THREE.Mesh(this.geometry,this.material)
  	this.scene.add( this.mesh )

    // Water
  	this.geometry = new THREE.BoxBufferGeometry( 500, 50, 500 )
  	this.material = new THREE.MeshStandardMaterial( {
  		premultipliedAlpha: true,
  		transparent: true,
      color: 0x3464AF,
      opacity: 0.9
    } )
  	this.mesh = new THREE.Mesh(this.geometry,this.material)
    this.mesh.position.y = 35
  	this.scene.add( this.mesh )

    // Island
  	this.geometry = new THREE.BoxBufferGeometry( 200, 100, 200 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0xdd861a } )
  	this.mesh = new THREE.Mesh(this.geometry,this.material)
    this.mesh.position.y = 50
  	this.scene.add( this.mesh )

    // Tree
  	this.geometry = new THREE.BoxBufferGeometry( 40, 150, 40 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0x423233 } )
  	this.mesh = new THREE.Mesh(this.geometry,this.material)
    this.mesh.position.y = 120
  	this.scene.add( this.mesh )

    // Leaves
    var leaves = new THREE.Group()
    var leave1 = new THREE.Group()
    var body = new THREE.Shape()
    body.lineTo( 0, 0 );
    body.lineTo( 50, -10 );
    body.lineTo( 50, 50 );
    body.lineTo( 0, 40 );
    this.geometry = new THREE.ExtrudeGeometry( body, this.extrudeSettings );
  	this.mesh = new THREE.Mesh(this.geometry, new THREE.MeshPhongMaterial( { color: 0x2ba930, side: THREE.DoubleSide } ) );
  	this.mesh.position.set( 20, 170, -20 );
    this.mesh.rotation.x = 1.55;
    leave1.add( this.mesh );

    var tail = new THREE.Shape()
    tail.lineTo( 0, -10 );
    tail.lineTo( 40, 25 );
    tail.lineTo( 0, 50 );
    this.geometry = new THREE.ExtrudeGeometry( tail, this.extrudeSettings );
  	this.mesh = new THREE.Mesh(this.geometry, new THREE.MeshPhongMaterial( { color: 0x2ba930, side: THREE.DoubleSide } ) );
  	this.mesh.position.set( 70, 170, -20 );
    this.mesh.rotation.x = 1.55;
    this.mesh.rotation.y = -0.5;
  	leave1.add( this.mesh )
    leaves.add(leave1)

    leave2 = new THREE.Group()
    var body = new THREE.Shape()
    body.lineTo( 0, 0 );
    body.lineTo( 50, -10 );
    body.lineTo( 50, 50 );
    body.lineTo( 0, 40 );
    this.geometry = new THREE.ExtrudeGeometry( body, this.extrudeSettings );
  	this.mesh = new THREE.Mesh(this.geometry, new THREE.MeshPhongMaterial( { color: 0x2ba930, side: THREE.DoubleSide } ) );
  	this.mesh.position.set( 20, 170, -20 );
    this.mesh.rotation.x = 1.55;
    leave2.add( this.mesh );

    var tail = new THREE.Shape()
    tail.lineTo( 0, -10 );
    tail.lineTo( 40, 25 );
    tail.lineTo( 0, 50 );
    this.geometry = new THREE.ExtrudeGeometry( tail, this.extrudeSettings );
  	this.mesh = new THREE.Mesh(this.geometry, new THREE.MeshPhongMaterial( { color: 0x2ba930, side: THREE.DoubleSide } ) );
  	this.mesh.position.set( 70, 170, -20 );
    this.mesh.rotation.x = 1.55;
    this.mesh.rotation.y = -0.5;
  	leave2.add( this.mesh );
    leave2.rotation.y = 1.6
    leaves.add(leave2)

    leave3 = new THREE.Group()
    var body = new THREE.Shape()
    body.lineTo( 0, 0 );
    body.lineTo( 50, -10 );
    body.lineTo( 50, 50 );
    body.lineTo( 0, 40 );
    this.geometry = new THREE.ExtrudeGeometry( body, this.extrudeSettings );
  	this.mesh = new THREE.Mesh(this.geometry, new THREE.MeshPhongMaterial( { color: 0x2ba930, side: THREE.DoubleSide } ) );
  	this.mesh.position.set( 20, 170, -20 );
    this.mesh.rotation.x = 1.55;
    leave3.add( this.mesh );

    var tail = new THREE.Shape()
    tail.lineTo( 0, -10 );
    tail.lineTo( 40, 25 );
    tail.lineTo( 0, 50 );
    this.geometry = new THREE.ExtrudeGeometry( tail, this.extrudeSettings );
  	this.mesh = new THREE.Mesh(this.geometry, new THREE.MeshPhongMaterial( { color: 0x2ba930, side: THREE.DoubleSide } ) );
  	this.mesh.position.set( 70, 170, -20 );
    this.mesh.rotation.x = 1.55;
    this.mesh.rotation.y = -0.5;
  	leave3.add( this.mesh );
    leave3.rotation.y = 3.2
    leaves.add(leave3)

    leave4 = new THREE.Group()
    var body = new THREE.Shape()
    body.lineTo( 0, 0 );
    body.lineTo( 50, -10 );
    body.lineTo( 50, 50 );
    body.lineTo( 0, 40 );
    this.geometry = new THREE.ExtrudeGeometry( body, this.extrudeSettings );
  	this.mesh = new THREE.Mesh(this.geometry, new THREE.MeshPhongMaterial( { color: 0x2ba930, side: THREE.DoubleSide } ) );
  	this.mesh.position.set( 20, 170, -20 );
    this.mesh.rotation.x = 1.55;
    leave4.add( this.mesh );

    var tail = new THREE.Shape()
    tail.lineTo( 0, -10 );
    tail.lineTo( 40, 25 );
    tail.lineTo( 0, 50 );
    this.geometry = new THREE.ExtrudeGeometry( tail, this.extrudeSettings );
  	this.mesh = new THREE.Mesh(this.geometry, new THREE.MeshPhongMaterial( { color: 0x2ba930, side: THREE.DoubleSide } ) );
  	this.mesh.position.set( 70, 170, -20 );
    this.mesh.rotation.x = 1.55;
    this.mesh.rotation.y = -0.5;
  	leave4.add( this.mesh );
    leave4.rotation.y = -1.6
    leaves.add(leave4)

    leaves.position.y = 24
    this.scene.add(leaves)

    // Floater
    this.geometry = new THREE.BoxBufferGeometry( 40, 50, 40 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0xcd4945 } )
  	var base = new THREE.Mesh(this.geometry,this.material)
    base.position.y = 60
    base.position.x = 170
    base.position.z = 170
  	this.floater.add( base )

    this.geometry = new THREE.BoxBufferGeometry( 30, 20, 30 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0xffffff } )
  	var white = new THREE.Mesh(this.geometry,this.material)
    white.position.y = 90
    white.position.z = 170
    white.position.x = 170
  	this.floater.add( white )

    this.geometry = new THREE.BoxBufferGeometry( 30, 1, 30 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0xcd4945 } )
  	var split = new THREE.Mesh(this.geometry,this.material)
    split.position.y = 100.5
    split.position.z = 170
    split.position.x = 170
  	this.floater.add( split )

    this.geometry = new THREE.BoxBufferGeometry( 15, 10, 15 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0xcd4945 } )
  	var top_red = new THREE.Mesh(this.geometry,this.material)
    top_red.position.y = 103
    top_red.position.z = 170
    top_red.position.x = 170
  	this.floater.add( top_red )

    this.geometry = new THREE.BoxBufferGeometry( 3, 10, 3 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0x666666 } )
  	var pillar = new THREE.Mesh(this.geometry,this.material)
    pillar.position.y = 113
    pillar.position.z = 165
    pillar.position.x = 165
  	this.floater.add( pillar )

    this.geometry = new THREE.BoxBufferGeometry( 3, 10, 3 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0x666666 } )
  	pillar = new THREE.Mesh(this.geometry,this.material)
    pillar.position.y = 113
    pillar.position.z = 175
    pillar.position.x = 175
  	this.floater.add( pillar )

    this.geometry = new THREE.BoxBufferGeometry( 3, 10, 3 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0x666666 } )
  	pillar = new THREE.Mesh(this.geometry,this.material)
    pillar.position.y = 113
    pillar.position.z = 165
    pillar.position.x = 175
  	this.floater.add( pillar )

    this.geometry = new THREE.BoxBufferGeometry( 3, 10, 3 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0x666666 } )
  	pillar = new THREE.Mesh(this.geometry,this.material)
    pillar.position.y = 113
    pillar.position.z = 175
    pillar.position.x = 165
    this.floater.add( pillar )

    this.geometry = new THREE.BoxBufferGeometry( 13, 5, 13 )
  	this.material = new THREE.MeshPhongMaterial( { color: 0x666666 } )
  	var top = new THREE.Mesh(this.geometry,this.material)
    top.position.y = 117
    top.position.z = 170
    top.position.x = 170
    this.floater.add( top )

    var headlight = new THREE.SpotLight( 0xffffff )
    headlight.position.set( 170, 113, 170 )
    headlight.angle = 0.5
    headlight.castShadow = true
    headlight.shadow.mapSize.width = 1
    headlight.shadow.mapSize.height = 1024
    headlight.shadow.camera.near = 0
    headlight.shadow.camera.far = 500
    headlight.shadow.camera.fov = 1
    headlight.intensity = 4.5
    headlight.distance = 500
    this.parent.position.y = 90
    this.parent.position.z = 170
    this.parent.position.x = 170
    headlight.penumbra = 0.3
    headlight.target.position.x = -100
    headlight.target.position.z = -100
    this.floater.add(this.parent)
    this.floater.add(headlight)
    this.parent.add(headlight.target)

    this.scene.add(this.floater)

    // Load blender character
    this.loader.load('../models/animated/character.js', function (geometry,materials) {
        materials.forEach( function (material) {
          material.skinning = true
        })
        self.mesh = new THREE.SkinnedMesh(geometry,new THREE.MeshFaceMaterial(materials))
        self.mesh.position.y = 100
        self.mesh.position.x = 50
        self.mesh.position.z = 50
        self.mesh.rotation.y = 1
        self.mesh.scale.set(5,5,5)
        self.mixer = new THREE.AnimationMixer(self.mesh)
        var sceneAnimationClip = geometry.animations[2]
        var sceneAnimation = self.mixer.clipAction(sceneAnimationClip)
        sceneAnimation.play()
    		self.scene.add(self.mesh)
    	}
    )
  },

  initLights: function () {
    var spotLight = new THREE.SpotLight( 0xffffff )
    spotLight.position.set( 200, 350, 200 )
    spotLight.castShadow = true
    spotLight.shadow.mapSize.width = 1
    spotLight.shadow.mapSize.height = 1024
    spotLight.shadow.camera.near = 0
    spotLight.shadow.camera.far = 1000
    spotLight.shadow.camera.fov = 10
    spotLight.intensity = 1
    spotLight.distance = 2000
    this.scene.add( spotLight )
    var spotLight2 = new THREE.SpotLight( 0xffffff );
    spotLight2.position.set( 400, 10, 400 )
    spotLight2.castShadow = true
    spotLight2.shadow.mapSize.width = 1
    spotLight2.shadow.mapSize.height = 1024
    spotLight2.shadow.camera.near = 0
    spotLight2.shadow.camera.far = 1000
    spotLight2.shadow.camera.fov = 10
    spotLight2.intensity = 1
    spotLight2.distance = 2000
    this.scene.add(spotLight2)
    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
    this.scene.add(hemiLight)
  },

  initRender: function () {
    var self = this
  	this.renderer.setPixelRatio( window.devicePixelRatio )
  	this.renderer.setSize( window.innerWidth, window.innerHeight )
    this.renderer.shadowMap.enabled = true
  	this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    document.body.appendChild(this.renderer.domElement)
  	window.addEventListener( 'resize', self.onWindowResize, false )
  },

  initControls: function () {
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement),
  	this.controls.enableDamping = true
  	this.controls.dampingFactor = 0.25
  	this.controls.enableZoom = true
  },

  onWindowResize: function () {
    this.camera.aspect = window.innerWidth / window.innerHeight
  	this.camera.updateProjectionMatrix()
  	this.renderer.setSize( window.innerWidth, window.innerHeight )
  },

  animLoop: function () {
    var delta = this.clock.getDelta()
    var elapsed = this.clock.getElapsedTime()
    this.floater.position.y = 0.7*Math.sin(delta*0.07)
    this.parent.rotation.y = 0.5*elapsed
    if ( this.mixer ) { this.mixer.update( delta ); }
    requestAnimationFrame(this.animLoop.bind(this))
  	this.renderer.render(this.scene, this.camera)
  }
}

app.init()

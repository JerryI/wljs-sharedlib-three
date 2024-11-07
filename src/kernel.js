
  const loader = async (self) => {
    self.THREE         = (await import('three'));
    self.OrbitControls = (await import("three/examples/jsm/controls/OrbitControls.js")).OrbitControls;
    self.RGBELoader    = (await import('three/examples/jsm/loaders/RGBELoader.js')).RGBELoader; 
    
    console.log('THREE shared library loaded!');
  }

  const loader1 = async (self) => {
    self.Water = (await import('three/examples/jsm/objects/Water.js')).Water
  }

  const loader2 = async (self) => {
    self.TransformControls =  (await import('three/addons/controls/TransformControls.js')).TransformControls
  }

  const loader3 = async (self) => {
    self.PointerLockControls = (await import('three/addons/controls/PointerLockControls.js')).PointerLockControls
  }

  new interpretate.shared(
    "THREE",
    loader
  );

  new interpretate.shared(
    "THREEWater",
    loader1
  );  

  new interpretate.shared(
    "THREETransformControls",
    loader2
  ); 

  new interpretate.shared(
    "THREEPointerLockControls",
    loader3
  )

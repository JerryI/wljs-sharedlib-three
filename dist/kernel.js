const loader = async (self) => {
    self.THREE         = (await import('./three.module-494e6c91.js'));
    self.OrbitControls = (await import('./OrbitControls-199dbeff.js')).OrbitControls;
    self.RGBELoader    = (await import('./RGBELoader-dc5102ec.js')).RGBELoader; 
    
    console.log('THREE shared library loaded!');
  };

  const loader1 = async (self) => {
    self.Water = (await import('./Water-73e87197.js')).Water;
  };

  const loader2 = async (self) => {
    self.TransformControls =  (await import('./TransformControls-3d8bddf4.js')).TransformControls;
  };

  const loader3 = async (self) => {
    self.PointerLockControls = (await import('./PointerLockControls-a3da7dd0.js')).PointerLockControls;
  };

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
  );

Particle3D=function(material){
	THREE.Particle.call(this,material);
	this.velocity=new THREE.Vector3(0,0,0);//�ٶ�;
	this.velocity.rotateX(10);//��ת;
	this.gravity=new THREE.Vector3(0,0,0.5);//���ٶ�;
	this.drag=1;//�ٶ����ϵ��;
};
//Particle:����;
//prototype:ԭ��;
Particle3D.prototype=new THREE.Particle();
Particle3D.prototype.constructor=Particle3D;//���캯��
Particle3D.prototype.updatePhysics=function(){
	this.velocity.multiplyScalar(this.drag);//ʸ����˺���
	this.velocity.addSelf(this.gravity);//ʸ����Ӻ���
	this.position.addSelf(this.velocity);//ʸ����Ӻ���
}
var TO_RADIANS=Math.PI/180;//�Ƕ��򻡶�ת��ϵ��*
THREE.Vector3.prototype.rotateY=function(angle){
	//��Y��˳ʱ����תangle;
	cosRY=Math.cos(angle*TO_RADIANS);
	sinRY=Math.sin(angle*TO_RADIANS);
	var tempz=this.z;
	var tempx=this.x;
	this.x=(tempx*cosRY)+(tempz*sinRY);
	this.z=(tempx*-sinRY)+(tempz*cosRY);
}
THREE.Vector3.prototype.rotateX=function(angle){
	//��X��˳ʱ����תangle;
	cosRY=Math.cos(angle*TO_RADIANS);
	sinRY=Math.sin(angle*TO_RADIANS);
	var tempz=this.z;;
	var tempy=this.y;
	this.y=(tempy*cosRY)+(tempz*sinRY);
	this.z=(tempy*-sinRY)+(tempz*cosRY);
}
THREE.Vector3.prototype.rotateZ=function(angle){
	//��Z��˳ʱ����תangle;
	cosRY=Math.cos(angle*TO_RADIANS);
	sinRY=Math.sin(angle*TO_RADIANS);
	var tempx=this.x;;
	var tempy=this.y;
	this.y=(tempy*cosRY)+(tempx*sinRY);
	this.x=(tempy*-sinRY)+(tempx*cosRY);
}
function randomRange(min,max){
	return((Math.random()*(max-min))+ min);
}

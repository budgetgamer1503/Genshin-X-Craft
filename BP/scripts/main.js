import{world}from'@minecraft/server';
world.afterEvents.itemUse.subscribe(e=>{
const i=e.itemStack;
if(i.typeId!=='gi:apprentices_notes')return;
const s=e.source;
if(s.runCommand('clear @s gi:magic_ammo 0 1').successCount>0){
const v=s.getViewDirection(),{x,y,z}=s.getHeadLocation(),n=s.dimension.spawnEntity("minecraft:wind_charge_projectile",{x:x+(v.x*2),y:y+(v.y*2),z:z+(v.z*2)}),c=n.getComponent('minecraft:projectile');
c.owner=s;c.shoot(v);
}
});
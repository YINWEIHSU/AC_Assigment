function createPlayer(name, hp, mp) {
  return {
    name: name,
    hp: hp,
    mp: mp,
    cure: function (hp) {
      const mpPoint = hp * 2
      if (this.hp > 0 && this.mp >= hp * 2) {
        this.hp += hp;
        this.mp -= mpPoint;
        return `${this.name} HP全補滿了! (HP=${this.hp}, MP=${this.mp})`;
      } else {
        return `${this.name} 沒有MP可以補血了,快去買藥水回補吧!`; return `${this.name} 糟糕,死亡了,從新開始吧!`;
      }
    },
    attack: function (enemy) {
      if (this.hp > 0) {
        const bash = Math.floor(Math.random() * 100) + 1
        if (enemy.hp > bash) {
          enemy.hp -= bash;
        } else {
          console.log(enemy.hp = 0);
          const result = `${this.name} bash ${enemy.name}. ${enemy.name} lose ${bash} HP. \n`;

          if (enemy.hp > 0) {
            result += `${enemy.name} 還存活著繼續戰鬥吧! (HP=${enemy.hp})`;
          } else {
            result += `${enemy.name} 戰鬥失敗,死亡了,從新開始吧!`;
          } return result;

          return `${this.name} 已死亡了,無法攻擊敵人!`;
        }
      }
    }
  
  console.log('====== CREATE PLAYERS ======')
  const magician = createPlayer('Magician', 30, 100)
  const warrior = createPlayer('Warrior', 100, 30)
  console.log(magician) // {name: "Magician", hp: 30, mp: 100}
  console.log(warrior) // {name: "Warrior", hp: 100, mp: 30}
  console.log('====== START FIGHT ======')
  while(warrior.hp > 0 && magician.hp > 0) {
    // 戰士先攻
    console.log(warrior.attack(magician))
    console.log(magician.cure(20)) // 魔法師補血 20 點
    // 魔法師後攻
    if (magician.hp > 0) {
      console.log('Change sides \n')
      console.log(magician.attack(warrior))
      console.log(warrior.cure(10)) // 戰士補血 10 點
    }
    console.log('======')
  }
  console.log('GAME OVER.')
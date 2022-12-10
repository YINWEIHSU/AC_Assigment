// DATA /////////////////////////////////////

const players = [
  { name: 'Bernard', email: 'bernard@example.com' },
  { name: 'Youchi', email: 'youchi@example.com' },
  { name: 'Yenting', email: 'yenting@example.com' },
  { name: 'Angela', email: 'angela@example.com' },
  { name: 'Yvonne', email: 'yvonne@example.com' },
  { name: 'Ellen', email: 'ellen@example.com' },
  { name: 'Walter', email: 'walter@example.com' },
  { name: 'Kevin', email: 'kevin@example.com' },
  { name: 'Tim', email: 'tim@example.com' },
  { name: 'Russell', email: 'russell@example.com' }
]

// FUNCTIONS /////////////////////////////////////

function drawWinner(players, prize) {
  let i = Math.random() * players.length
  const winner = players.splice(i, 1)[0]
  announceMsg(winner, prize)
}

function announceMsg(winner, prize) {
  // 請新增 encodeName 和 encodeEmail 函式進行字串處理 
  console.log(`${encodeNumber(winner.number)} | ${encodeName(winner.name)} | ${encodeEmail(winner.email)} | ${prize}`)
}
function encodeName(name) {
  let nameFront = name.slice(0, 2)
  for (i = 0; i < name.length - 2; i++) {
    nameFront += '*'
  }
  return nameFront
}

function encodeEmail(email) {
  let mailList = email.split('@')
  let mailName = mailList[0] //bernard
  let mailStart = mailName.substr(0, Math.floor(mailName.length / 2))
  for (i = 0; i < 3; i++) {
    mailStart += '.'
  }
  return email = mailStart + '@' + mailList[1]
}
function encodeNumber(number) {
  let ticket = ''
  let enPart = ''
  let numberPart = ''
  for (let i = 0; i < 2; i++) {
    enPart += String.fromCharCode(Math.floor(Math.random() * 26 + 65))
  }
  for (let i = 0; i < 4; i++) {
    numberPart += Math.floor(Math.random() * 10)
  }
  ticket = enPart + numberPart
  return ticket
}
// add more functions here

// EXECUTING /////////////////////////////////////

// each player gets a lottery ticket
// write your code here

// draw 3 winners and announce the results
drawWinner(players, '頭獎')
drawWinner(players, '貮獎')
drawWinner(players, '叁獎')

// the rest of players get participation award
for (let j = 0; j < players.length; j++) {
  announceMsg(players[j], '參加獎')
}
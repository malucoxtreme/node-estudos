const inquirer = require('inquirer')
const chalk = require('chalk')

const fs = require('fs')
const { exit } = require('process')
const { encode } = require('punycode')
const { isString } = require('util')

//main function
function operation(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: ['Criar Conta', 
                      'Exibir Contas', 
                      'Exibir Saldo', 
                      'Depositar', 
                      'Sacar', 
                      'Transferir', 
                      'Sair']
        }
    ]).then(answers => {
      console.log(answers.action)
      if(answers.action == 'Criar Conta'){
        createAccount()
      } else if(answers.action == 'Exibir Contas') {
        showAccounts()

      } else if(answers.action == 'Exibir Saldo') {
        getAccount('balance')
      
      } else if(answers.action == 'Depositar') {
          getAccount('deposit')
      } else if(answers.action == 'Sacar') {
        getAccount('withDraw')
      } else if(answers.action == 'Transferir') {
      
      } else if(answers.action == 'Sair') {
          console.log(chalk.bgBlue.black('Obrigado por usar o accounts.'))
          process.exit(1)
      }

    }).catch((err) => console.log(err))
}

//read account 
function readAccount(accountName){
  const accountFile = fs.readFileSync(`accounts/${accountName}`,{ 
  encoding: 'utf8',
  flag: 'r'
  })
  return JSON.parse(accountFile) 
}


// go back to operation
function goBack(dynaFunc){
    inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Deseja voltar?',
      choices: ['Sim', 'Não']
    }
  ]).then((answers) => {
    if(answers.action == 'Sim'){
      operation()
    } else if (dynaFunc == 'buildAcc') {
      buildAcc()
    } else if (dynaFunc == 'showAccounts'){
      showAccounts()
    } else if (dynaFunc == 'getAccount'){
      getAccount()
    }    
  }).catch((err) => console.log(err))
}

//create account
function createAccount(){
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
  console.log(chalk.green('Defina as informações da sua conta'))
  buildAcc()
}      

// build account
function buildAcc(){
 inquirer.prompt([{
    name: 'acc',
    message:'Digite um nome para sua conta',}
  ]).then((answers) => {
      console.info(answers.acc)
      if(!fs.existsSync('accounts')){
        fs.mkdirSync('accounts')
        createFile(answers.acc)
        console.log(chalk.green('Conta criada com sucesso!'))
      } else if (!answers.acc) {
        console.log('Digite um nome valido para sua conta')
      } else if (fs.existsSync(`accounts/${answers.acc}.json`)){
        console.log(chalk.bgRed.white('essa conta já existe'))
        const toReturn = 'buildAcc()'
      } else {createFile(answers.acc)}
  return  goBack('buildAcc')}).catch((err) => console.log(err))
}

//just create File de vaneios loucos
function createFile(account){
  fs.writeFileSync(`accounts/${account}.json`, '{"balance": 0}', (err) => {
    console.log(err)})}

//show accounts exists
function showAccounts(){
  accounts = fs.readdirSync('accounts')
  console.log(accounts)
  return goBack('showAccounts')
}

function getAccount(whereICameFrom){
  inquirer.prompt([
    {
      name:'accountName',
      message:'Qual conta você deseja acessar?'
    }
  ]).then((answers) => {
    const accountFile = answers.accountName + '.json'
    const existAcc = fs.existsSync(`accounts/${accountFile}`)
    if (existAcc == true && whereICameFrom == 'balance'){
      console.log(chalk.bgGreen.black(`Conta encontrada\n\rSaldo: ${readAccount(accountFile).balance}` ))
      return goBack('operation')
    } else if (existAcc == true && whereICameFrom == 'withDraw'){
       console.log(chalk.bgGreen.black(`Conta ${answers.accountName} encontrada`))
       withDraw(accountFile)
       return true
    } else if (existAcc == true && whereICameFrom == 'deposit'){
        console.log(chalk.bgGreen.black(`Conta ${answers.accountName} encontrada`))
        deposit(accountFile)
        return true
    } else {
       console.log(chalk.bgRed.white('Conta não encontrada'))  
       goBack('getAccount')
       return false
    }}).catch((err) => console.log(err))
  
}
//deposits amount 
function deposit(account){
  inquirer.prompt([
  {
  name:'amount',
  message:'Digite o valor que deseja depositar'}
  ]).then((answers) => {
    addAmount(answers.amount, account)
    }).catch((err) => console.log(err))
}

function addAmount(addAmount, account){
  if (addAmount > 0){
    const floatedAmount = parseFloat(readAccount(account).balance) + parseFloat(addAmount)
    const stringedAmount = {"balance": floatedAmount }
    fs.writeFileSync(`accounts/${account}`, JSON.stringify(stringedAmount), (err) => {
      console.log(err)
    })
    console.log(chalk.green('Deposito realizado com sucesso!'))
    goBack('operation')
  } else {
    console.log(chalk.bgRed.white('Valor inválido'))
    return goBack('getAccount')
  }
}

function withDraw(account){
  inquirer.prompt([
  {
  name:'amount',
  message:'Digite o valor que deseja sacar'}
  ]).then((answers) => {
    subAmount(answers.amount, account)
    }).catch((err) => console.log(err))
}
function subAmount(subAmount, account){
  const floatedAmount = parseFloat(readAccount(account).balance) - parseFloat(subAmount)
  const stringedAmount = {"balance": floatedAmount }
  console.log(stringedAmount)
  if (subAmount >= 0 ){
    fs.writeFileSync(`accounts/${account}`, JSON.stringify(stringedAmount), (err) => {
      console.log(err)
    })
    console.log(chalk.green('Deposito realizado com sucesso!'))
    goBack('operation')
  }  else {
    console.log(chalk.bgRed.white('Valor inválido'))
    return goBack('getAccount')
  }
}




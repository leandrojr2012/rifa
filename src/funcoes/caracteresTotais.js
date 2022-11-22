export function caracteresTotais(variavel){
    
    const variavelCaracteresTotais =     
                variavel.indexOf('"') > -1 || variavel.indexOf('[') > -1 ||
                variavel.indexOf('!') > -1 || variavel.indexOf('{') > -1 ||
                variavel.indexOf('@') > -1 || variavel.indexOf('ª') > -1 ||
                variavel.indexOf('#') > -1 || variavel.indexOf(']') > -1 ||
                variavel.indexOf('$') > -1 || variavel.indexOf('}') > -1 ||
                variavel.indexOf('%') > -1 || variavel.indexOf('º') > -1 ||
                variavel.indexOf('¨') > -1 || variavel.indexOf('~') > -1 ||
                variavel.indexOf('&') > -1 || variavel.indexOf('^') > -1 ||
                variavel.indexOf('*') > -1 || variavel.indexOf(';') > -1 ||
                variavel.indexOf('(') > -1 || variavel.indexOf(':') > -1 ||
                variavel.indexOf(')') > -1 || variavel.indexOf('>') > -1 ||
                variavel.indexOf('_') > -1 || variavel.indexOf('.') > -1 ||
                variavel.indexOf('Ã') > -1 || variavel.indexOf('<') > -1 ||
                variavel.indexOf('=') > -1 || variavel.indexOf(',') > -1 ||
                variavel.indexOf('+') > -1 || variavel.indexOf('¬') > -1 ||
                variavel.indexOf('§') > -1 || variavel.indexOf('`') > -1 ||
                variavel.indexOf('/') > -1 || variavel.indexOf('¢') > -1 ||
                variavel.indexOf('?') > -1 || variavel.indexOf('³') > -1 ||
                variavel.indexOf('q') > -1 || variavel.indexOf('o') > -1 ||
                variavel.indexOf('w') > -1 || variavel.indexOf('p') > -1 ||
                variavel.indexOf('e') > -1 || variavel.indexOf('a') > -1 ||
                variavel.indexOf('r') > -1 || variavel.indexOf('s') > -1 ||
                variavel.indexOf('t') > -1 || variavel.indexOf('d') > -1 ||
                variavel.indexOf('y') > -1 || variavel.indexOf('f') > -1 ||
                variavel.indexOf('u') > -1 || variavel.indexOf('g') > -1 ||
                variavel.indexOf('i') > -1 || variavel.indexOf('h') > -1 ||
                variavel.indexOf('j') > -1 || variavel.indexOf('D') > -1 ||
                variavel.indexOf('k') > -1 || variavel.indexOf('E') > -1 ||
                variavel.indexOf('l') > -1 || variavel.indexOf('F') > -1 ||
                variavel.indexOf('ç') > -1 || variavel.indexOf('G') > -1 ||
                variavel.indexOf('z') > -1 || variavel.indexOf('H') > -1 ||
                variavel.indexOf('x') > -1 || variavel.indexOf('I') > -1 ||
                variavel.indexOf('c') > -1 || variavel.indexOf('J') > -1 ||
                variavel.indexOf('v') > -1 || variavel.indexOf('K') > -1 ||
                variavel.indexOf('b') > -1 || variavel.indexOf('L') > -1 ||
                variavel.indexOf('n') > -1 || variavel.indexOf('M') > -1 ||
                variavel.indexOf('m') > -1 || variavel.indexOf('N') > -1 ||
                variavel.indexOf('A') > -1 || variavel.indexOf('O') > -1 ||
                variavel.indexOf('B') > -1 || variavel.indexOf('P') > -1 ||
                variavel.indexOf('C') > -1 || variavel.indexOf('Q') > -1 ||
                variavel.indexOf('R') > -1 || variavel.indexOf('X') > -1 ||
                variavel.indexOf('S') > -1 || variavel.indexOf('W') > -1 ||
                variavel.indexOf('T') > -1 || variavel.indexOf('Y') > -1 ||
                variavel.indexOf('U') > -1 || variavel.indexOf('Z') > -1 ||
                variavel.indexOf('V') > -1 || variavel.indexOf('Ç') > -1 

                return variavelCaracteresTotais
}
/**
 * Script de teste para validar o timing dos botões nas páginas Kim, Megan e Rock
 * 
 * Este script testa a lógica de exibição dos botões baseada no tempo do vídeo
 * armazenado no localStorage.
 * 
 * Execute com: node test-button-timing.js
 */

const CONFIG = {
    kim: {
        videoId: '69359e5677723b2a72cefc64',
        pitchTime: 630,
        name: 'KIM'
    },
    megan: {
        videoId: '69359e4d9f9c59a190d01503',
        pitchTime: 630,
        name: 'MEGAN'
    },
    rock: {
        videoId: '69359e59332125736afe6e6e',
        pitchTime: 700,
        name: 'ROCK'
    }
};

/**
 * Simula a lógica de verificação do botão
 * Esta é a mesma lógica usada nos componentes React
 */
function simulateButtonLogic(videoId, pitchTime, storedValue) {
    // Se não existe valor, não mostra
    if (!storedValue) {
        return {
            shouldShow: false,
            reason: 'Sem valor no localStorage',
            videoTimeInSeconds: null,
            originalValue: null
        };
    }
    
    const storedVideoTime = Number(storedValue);
    
    // Validação de valores inválidos
    if (isNaN(storedVideoTime) || storedVideoTime <= 0) {
        return {
            shouldShow: false,
            reason: 'Valor inválido (NaN ou <= 0)',
            videoTimeInSeconds: null,
            originalValue: storedValue
        };
    }
    
    // Converte milissegundos para segundos se necessário
    const videoTimeInSeconds = storedVideoTime > 60000 
        ? storedVideoTime / 1000 
        : storedVideoTime;
    
    // Verifica se o tempo passou do pitchTime (usa > e não >=)
    const shouldShow = videoTimeInSeconds > pitchTime;
    
    return {
        shouldShow,
        reason: shouldShow 
            ? `Tempo (${videoTimeInSeconds}s) > pitchTime (${pitchTime}s)` 
            : `Tempo (${videoTimeInSeconds}s) <= pitchTime (${pitchTime}s)`,
        videoTimeInSeconds,
        originalValue: storedValue
    };
}

/**
 * Executa todos os testes
 */
function runAllTests() {
    console.log('🧪 Iniciando testes de timing dos botões...\n');
    console.log('='.repeat(60));
    
    const testCases = [
        // KIM tests
        { page: 'kim', time: 629, expected: false, description: 'KIM: 629s (antes do tempo)' },
        { page: 'kim', time: 630, expected: false, description: 'KIM: 630s (tempo exato - não deve aparecer)' },
        { page: 'kim', time: 631, expected: true, description: 'KIM: 631s (depois do tempo)' },
        { page: 'kim', time: 631000, expected: true, description: 'KIM: 631000ms (depois do tempo em milissegundos)' },
        { page: 'kim', time: 0, expected: false, description: 'KIM: 0 (valor inválido)' },
        { page: 'kim', time: -1, expected: false, description: 'KIM: -1 (valor inválido)' },
        { page: 'kim', time: null, expected: false, description: 'KIM: null (sem valor)' },
        
        // MEGAN tests
        { page: 'megan', time: 629, expected: false, description: 'MEGAN: 629s (antes do tempo)' },
        { page: 'megan', time: 630, expected: false, description: 'MEGAN: 630s (tempo exato - não deve aparecer)' },
        { page: 'megan', time: 631, expected: true, description: 'MEGAN: 631s (depois do tempo)' },
        { page: 'megan', time: 631000, expected: true, description: 'MEGAN: 631000ms (depois do tempo em milissegundos)' },
        { page: 'megan', time: 0, expected: false, description: 'MEGAN: 0 (valor inválido)' },
        { page: 'megan', time: -1, expected: false, description: 'MEGAN: -1 (valor inválido)' },
        { page: 'megan', time: null, expected: false, description: 'MEGAN: null (sem valor)' },
        
        // ROCK tests
        { page: 'rock', time: 699, expected: false, description: 'ROCK: 699s (antes do tempo)' },
        { page: 'rock', time: 700, expected: false, description: 'ROCK: 700s (tempo exato - não deve aparecer)' },
        { page: 'rock', time: 701, expected: true, description: 'ROCK: 701s (depois do tempo)' },
        { page: 'rock', time: 701000, expected: true, description: 'ROCK: 701000ms (depois do tempo em milissegundos)' },
        { page: 'rock', time: 0, expected: false, description: 'ROCK: 0 (valor inválido)' },
        { page: 'rock', time: -1, expected: false, description: 'ROCK: -1 (valor inválido)' },
        { page: 'rock', time: null, expected: false, description: 'ROCK: null (sem valor)' },
    ];

    let passed = 0;
    let failed = 0;
    const failures = [];

    testCases.forEach((test, index) => {
        const config = CONFIG[test.page];
        const storedValue = test.time === null ? null : String(test.time);
        const result = simulateButtonLogic(config.videoId, config.pitchTime, storedValue);
        const testPassed = result.shouldShow === test.expected;
        
        if (testPassed) {
            passed++;
            console.log(`✅ [${index + 1}/${testCases.length}] PASSOU - ${test.description}`);
        } else {
            failed++;
            failures.push({
                test: test.description,
                expected: test.expected ? 'deve aparecer' : 'não deve aparecer',
                actual: result.shouldShow ? 'aparece' : 'não aparece',
                reason: result.reason
            });
            console.log(`❌ [${index + 1}/${testCases.length}] FALHOU - ${test.description}`);
            console.log(`   Esperado: ${test.expected ? 'deve aparecer' : 'não deve aparecer'}`);
            console.log(`   Obtido: ${result.shouldShow ? 'aparece' : 'não aparece'}`);
            console.log(`   Motivo: ${result.reason}`);
        }
    });

    console.log('\n' + '='.repeat(60));
    console.log('📊 RESUMO DOS TESTES');
    console.log('='.repeat(60));
    console.log(`✅ Passou: ${passed}`);
    console.log(`❌ Falhou: ${failed}`);
    console.log(`📈 Total: ${testCases.length} testes`);
    console.log(`📊 Taxa de sucesso: ${((passed / testCases.length) * 100).toFixed(2)}%`);

    if (failures.length > 0) {
        console.log('\n❌ TESTES QUE FALHARAM:');
        console.log('='.repeat(60));
        failures.forEach((failure, index) => {
            console.log(`\n${index + 1}. ${failure.test}`);
            console.log(`   Esperado: ${failure.expected}`);
            console.log(`   Obtido: ${failure.actual}`);
            console.log(`   Motivo: ${failure.reason}`);
        });
    }

    console.log('\n' + '='.repeat(60));
    
    if (failed === 0) {
        console.log('🎉 TODOS OS TESTES PASSARAM!');
        process.exit(0);
    } else {
        console.log('⚠️  ALGUNS TESTES FALHARAM. Verifique os detalhes acima.');
        process.exit(1);
    }
}

/**
 * Testa casos específicos de borda
 */
function testEdgeCases() {
    console.log('\n🔍 Testando casos de borda...\n');
    
    const edgeCases = [
        { page: 'kim', time: 629.9, expected: false, description: 'KIM: 629.9s (quase no limite)' },
        { page: 'kim', time: 630.1, expected: true, description: 'KIM: 630.1s (após o limite)' },
        { page: 'rock', time: 699.9, expected: false, description: 'ROCK: 699.9s (quase no limite)' },
        { page: 'rock', time: 700.1, expected: true, description: 'ROCK: 700.1s (após o limite)' },
        { page: 'kim', time: 'abc', expected: false, description: 'KIM: string inválida' },
        { page: 'kim', time: '', expected: false, description: 'KIM: string vazia' },
    ];

    edgeCases.forEach(test => {
        const config = CONFIG[test.page];
        const storedValue = test.time === null ? null : String(test.time);
        const result = simulateButtonLogic(config.videoId, config.pitchTime, storedValue);
        const testPassed = result.shouldShow === test.expected;
        
        const status = testPassed ? '✅' : '❌';
        console.log(`${status} ${test.description} - ${result.reason}`);
    });
}

// Executar testes
if (require.main === module) {
    runAllTests();
    testEdgeCases();
}

module.exports = { simulateButtonLogic, CONFIG };


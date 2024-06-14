'use strict';

module.exports = {
  types: [
    { value: 'feat', name: 'feat | 기능을 추가해요.' },
    { value: 'fix', name: 'fix | 오류 수정건에 대한 기능을 개선해요.' },
    { value: 'perf', name: 'perf | 성능을 개선해요.' },
    { value: 'refactor', name: 'refactor | 코드 및 성능 개선해요.' },
    { value: 'style', name: 'style | 포맷팅이나 컨벤션에 따라 수정 사항을 반영해요.' },
    { value: 'docs', name: 'docs | 문서의 내용을 일부 변경해요.' },
    { value: 'test', name: 'test | 테스트 코드를 추가하거나 리팩토링해요.' },
    { value: 'chore', name: 'chore | 사소한 변경사항이나, 패키지매니저를 관리해요.' },
    { value: 'revert', name: 'revert | 이전의 코드로 되돌려요.' },
    { value: 'move', name: 'move | 디렉토리, 파일이나 코드를 새로운 위치로 이동시켜요.' },
    { value: 'remove', name: 'revert | 쓸모없는 디렉토리, 파일이나 코드를 삭제해요.' },
    { value: 'ci', name: 'ci | CI를 업데이트해요.' }
  ],
  scopes: [
    'component',
    'css-style',
    'custom-hook',
    'store',
    'util',
    'api',
    // 'wrong codes',
    // 'spaghetti codes',
    // 'alien codes',
    'assets',
    'package',
    'lint',
    // 'formatting',
    'config',
    'workflow',
    'breaking',
    'no-release',
    'README'
  ],
  messages: {
    type: '커밋 종류를 선택하세요:',
    scope: '이 변경의 스코프를 선택하세요 (optional):',
    customScope: '이 변경의 스코프를 입력하세요 (optional):',
    subject: '변경에 대한 간단한 설명을 작성하세요:\n',
    body: '변경에 대한 자세한 설명을 작성하세요 (optional). 사용법이나 동기 등:\n',
    breaking: '이 변경으로 인해 발생하는 중요한 변경점이 있습니까? (optional):\n',
    footer: '이 변경과 관련된 이슈가 있습니까? (optional):\n',
    confirmCommit: '이 커밋 메시지로 커밋하겠습니까?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100
};

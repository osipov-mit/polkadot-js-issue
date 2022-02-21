import { TypeRegistry } from '@polkadot/types';

function main() {
  const reg = new TypeRegistry();
  const types = {
    Test: {
      test_u32: 'u32',
      test_btreeset: 'BTreeSet<u32>',
      test_h256: 'H256',
    },
  };
  reg.setKnownTypes({
    types,
  });
  reg.register(types);
  const test = reg.createType('Test', {
    test_u32: 1,
    test_btreeset: [],
    test_h256: '0x0000000000000000000000000000000000000000000000000000000000000000',
  });
  const test = reg.createType('Test', test.toHex());
}

main();

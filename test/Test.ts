import assert from "assert";
import { 
  TestHelpers,
  VoltageV3Factory_FeeAmountEnabled
} from "generated";
const { MockDb, VoltageV3Factory } = TestHelpers;

describe("VoltageV3Factory contract FeeAmountEnabled event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for VoltageV3Factory contract FeeAmountEnabled event
  const event = VoltageV3Factory.FeeAmountEnabled.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("VoltageV3Factory_FeeAmountEnabled is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await VoltageV3Factory.FeeAmountEnabled.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualVoltageV3FactoryFeeAmountEnabled = mockDbUpdated.entities.VoltageV3Factory_FeeAmountEnabled.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedVoltageV3FactoryFeeAmountEnabled: VoltageV3Factory_FeeAmountEnabled = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      fee: event.params.fee,
      tickSpacing: event.params.tickSpacing,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualVoltageV3FactoryFeeAmountEnabled, expectedVoltageV3FactoryFeeAmountEnabled, "Actual VoltageV3FactoryFeeAmountEnabled should be the same as the expectedVoltageV3FactoryFeeAmountEnabled");
  });
});

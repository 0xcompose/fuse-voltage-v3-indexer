/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  VoltageV3Factory,
  VoltageV3Factory_FeeAmountEnabled,
  VoltageV3Factory_FeeAmountExtraInfoUpdated,
  VoltageV3Factory_OwnerChanged,
  VoltageV3Factory_PoolCreated,
  VoltageV3Factory_SetLmPoolDeployer,
  VoltageV3Factory_WhiteListAdded,
  VoltageV3Pair,
  VoltageV3Pair_Burn,
  VoltageV3Pair_Collect,
  VoltageV3Pair_CollectProtocol,
  VoltageV3Pair_Flash,
  VoltageV3Pair_IncreaseObservationCardinalityNext,
  VoltageV3Pair_Initialize,
  VoltageV3Pair_Mint,
  VoltageV3Pair_SetFeeProtocol,
  VoltageV3Pair_SetLmPoolEvent,
  VoltageV3Pair_Swap,
} from "generated";

VoltageV3Factory.FeeAmountEnabled.handler(async ({ event, context }) => {
  const entity: VoltageV3Factory_FeeAmountEnabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fee: event.params.fee,
    tickSpacing: event.params.tickSpacing,
  };

  context.VoltageV3Factory_FeeAmountEnabled.set(entity);
});

VoltageV3Factory.FeeAmountExtraInfoUpdated.handler(async ({ event, context }) => {
  const entity: VoltageV3Factory_FeeAmountExtraInfoUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fee: event.params.fee,
    whitelistRequested: event.params.whitelistRequested,
    enabled: event.params.enabled,
  };

  context.VoltageV3Factory_FeeAmountExtraInfoUpdated.set(entity);
});

VoltageV3Factory.OwnerChanged.handler(async ({ event, context }) => {
  const entity: VoltageV3Factory_OwnerChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldOwner: event.params.oldOwner,
    newOwner: event.params.newOwner,
  };

  context.VoltageV3Factory_OwnerChanged.set(entity);
});

VoltageV3Factory.PoolCreated.handler(async ({ event, context }) => {
  const entity: VoltageV3Factory_PoolCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token0: event.params.token0,
    token1: event.params.token1,
    fee: event.params.fee,
    tickSpacing: event.params.tickSpacing,
    pool: event.params.pool,
  };

  context.VoltageV3Factory_PoolCreated.set(entity);
});

VoltageV3Factory.SetLmPoolDeployer.handler(async ({ event, context }) => {
  const entity: VoltageV3Factory_SetLmPoolDeployer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lmPoolDeployer: event.params.lmPoolDeployer,
  };

  context.VoltageV3Factory_SetLmPoolDeployer.set(entity);
});

VoltageV3Factory.WhiteListAdded.handler(async ({ event, context }) => {
  const entity: VoltageV3Factory_WhiteListAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    verified: event.params.verified,
  };

  context.VoltageV3Factory_WhiteListAdded.set(entity);
});

VoltageV3Pair.Burn.handler(async ({ event, context }) => {
  const entity: VoltageV3Pair_Burn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    tickLower: event.params.tickLower,
    tickUpper: event.params.tickUpper,
    amount: event.params.amount,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.VoltageV3Pair_Burn.set(entity);
});

VoltageV3Pair.Collect.handler(async ({ event, context }) => {
  const entity: VoltageV3Pair_Collect = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    recipient: event.params.recipient,
    tickLower: event.params.tickLower,
    tickUpper: event.params.tickUpper,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.VoltageV3Pair_Collect.set(entity);
});

VoltageV3Pair.CollectProtocol.handler(async ({ event, context }) => {
  const entity: VoltageV3Pair_CollectProtocol = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.VoltageV3Pair_CollectProtocol.set(entity);
});

VoltageV3Pair.Flash.handler(async ({ event, context }) => {
  const entity: VoltageV3Pair_Flash = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    paid0: event.params.paid0,
    paid1: event.params.paid1,
  };

  context.VoltageV3Pair_Flash.set(entity);
});

VoltageV3Pair.IncreaseObservationCardinalityNext.handler(async ({ event, context }) => {
  const entity: VoltageV3Pair_IncreaseObservationCardinalityNext = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    observationCardinalityNextOld: event.params.observationCardinalityNextOld,
    observationCardinalityNextNew: event.params.observationCardinalityNextNew,
  };

  context.VoltageV3Pair_IncreaseObservationCardinalityNext.set(entity);
});

VoltageV3Pair.Initialize.handler(async ({ event, context }) => {
  const entity: VoltageV3Pair_Initialize = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sqrtPriceX96: event.params.sqrtPriceX96,
    tick: event.params.tick,
  };

  context.VoltageV3Pair_Initialize.set(entity);
});

VoltageV3Pair.Mint.handler(async ({ event, context }) => {
  const entity: VoltageV3Pair_Mint = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    tickLower: event.params.tickLower,
    tickUpper: event.params.tickUpper,
    amount: event.params.amount,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.VoltageV3Pair_Mint.set(entity);
});

VoltageV3Pair.SetFeeProtocol.handler(async ({ event, context }) => {
  const entity: VoltageV3Pair_SetFeeProtocol = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeProtocol0Old: event.params.feeProtocol0Old,
    feeProtocol1Old: event.params.feeProtocol1Old,
    feeProtocol0New: event.params.feeProtocol0New,
    feeProtocol1New: event.params.feeProtocol1New,
  };

  context.VoltageV3Pair_SetFeeProtocol.set(entity);
});

VoltageV3Pair.SetLmPoolEvent.handler(async ({ event, context }) => {
  const entity: VoltageV3Pair_SetLmPoolEvent = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    addr: event.params.addr,
  };

  context.VoltageV3Pair_SetLmPoolEvent.set(entity);
});

VoltageV3Pair.Swap.handler(async ({ event, context }) => {
  const entity: VoltageV3Pair_Swap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    sqrtPriceX96: event.params.sqrtPriceX96,
    liquidity: event.params.liquidity,
    tick: event.params.tick,
    protocolFeesToken0: event.params.protocolFeesToken0,
    protocolFeesToken1: event.params.protocolFeesToken1,
  };

  context.VoltageV3Pair_Swap.set(entity);
});

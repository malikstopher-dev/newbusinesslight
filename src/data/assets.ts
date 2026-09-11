export interface ResponsiveImage {
  desktop: string;
  mobile: string;
}

const pair = (desktop: string, mobile: string): ResponsiveImage => ({
  desktop: `/assets/nbl-v3/desktop/${desktop}`,
  mobile: `/assets/nbl-v3/mobile/${mobile}`,
});

export const v3Images = {
  miningOperations: pair('01-mining-operations-sunrise-1600x900.jpg', '01-mining-operations-sunrise-mobile-1080x1920.jpg'),
  warehouseLogistics: pair('02-warehouse-logistics-1600x900.jpg', '02-warehouse-logistics-mobile-1080x1920.jpg'),
  electricalMaintenance: pair('03-electrical-maintenance-1600x900.jpg', '03-electrical-maintenance-mobile-1080x1920.jpg'),
  conveyorComponents: pair('04-conveyor-components-1600x900.jpg', '04-conveyor-components-mobile-1080x1920.jpg'),
  engineeringTeam: pair('05-engineering-field-team-1600x900.jpg', '05-engineering-field-team-mobile-1080x1920.jpg'),
  fieldSupport: pair('06-field-support-drc-1600x900.jpg', '06-field-support-drc-mobile-1080x1920.jpg'),
  industrialProcessing: pair('07-industrial-processing-conveyor-1600x900.jpg', '07-industrial-processing-conveyor-mobile-1080x1920.jpg'),
  miningProcessing: pair('08-mining-processing-plant-1600x900.jpg', '08-mining-processing-plant-mobile-1080x1920.jpg'),
} as const;

export const pageHeroes = {
  company: v3Images.engineeringTeam,
  solutions: v3Images.industrialProcessing,
  products: v3Images.conveyorComponents,
  procurement: v3Images.warehouseLogistics,
  industries: v3Images.miningProcessing,
  capabilities: v3Images.fieldSupport,
  contact: v3Images.miningOperations,
  rfq: v3Images.electricalMaintenance,
} as const;

export const assets = {
  hero: [
    v3Images.miningOperations,
    v3Images.conveyorComponents,
    v3Images.fieldSupport,
    v3Images.warehouseLogistics,
    v3Images.electricalMaintenance,
  ],
  about: {
    team: v3Images.engineeringTeam,
    operations: v3Images.miningOperations,
  },
  solutions: {
    industrialSupply: v3Images.industrialProcessing,
    procurement: v3Images.warehouseLogistics,
    sourcing: v3Images.miningOperations,
    conveyor: v3Images.conveyorComponents,
    requirementSupport: v3Images.fieldSupport,
    electrical: v3Images.electricalMaintenance,
  },
  products: {
    conveyor: v3Images.conveyorComponents,
    electrical: v3Images.electricalMaintenance,
    mechanical: v3Images.industrialProcessing,
    industrial: v3Images.miningProcessing,
  },
  industries: {
    mining: v3Images.miningProcessing,
    processing: v3Images.industrialProcessing,
    construction: v3Images.electricalMaintenance,
    maintenance: v3Images.fieldSupport,
    commercial: v3Images.warehouseLogistics,
  },
  procurement: {
    warehouse: v3Images.warehouseLogistics,
    logistics: v3Images.fieldSupport,
  },
} as const;

export const solutionImages = [
  v3Images.industrialProcessing,
  v3Images.warehouseLogistics,
  v3Images.miningOperations,
  v3Images.conveyorComponents,
  v3Images.fieldSupport,
  v3Images.electricalMaintenance,
] as const;

export const industryImages = [
  v3Images.miningProcessing,
  v3Images.industrialProcessing,
  v3Images.electricalMaintenance,
  v3Images.fieldSupport,
  v3Images.warehouseLogistics,
] as const;

export const productImages = [
  v3Images.conveyorComponents,
  v3Images.industrialProcessing,
  v3Images.engineeringTeam,
  v3Images.miningProcessing,
  v3Images.electricalMaintenance,
  v3Images.miningOperations,
  v3Images.fieldSupport,
  v3Images.warehouseLogistics,
] as const;

export class SnowboardFilterObject {
    gender: string;
    riderWeight: number;
    shoeSize: number;
    riderLevel: string;
    preferredTerrain: string;
    bend: string;
    shape: string;
    flex: string;

    constructor(gender: string,
        riderWeight: number,
        shoeSize: number,
        riderLevel: string,
        preferredTerrain: string,
        bend: string,
        shape: string,
        flex: string) {

            this.gender = gender;
            this.riderWeight = riderWeight;
            this.shoeSize = shoeSize;
            this.riderLevel = riderLevel;
            this.preferredTerrain = preferredTerrain;
            this.bend = bend;
            this.shape = shape;
            this.flex = flex;
        
      }
}
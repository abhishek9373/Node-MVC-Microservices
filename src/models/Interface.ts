import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface businessEmployeeFields extends Model<InferAttributes<businessEmployeeFields>, InferCreationAttributes<businessEmployeeFields>> {
    // busi_emp_id: CreationOptional<number>;
    // shop_id: number;
    // qpid: number;
    // reporting_to: number;
    // business_id: number;
    // emp_site: string | null;
    // role_id: number | null;
    // working_days?: string | null;
    // status: string;
    // created_at?: string;
    // updated_at?: string;
    // shift: string;
    // start_time?: string;
    // end_time?: string;
}

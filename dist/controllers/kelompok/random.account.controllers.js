import * as kelompokServices from '../../services/kelompok/kelompok.services';
export const createRandomAccountByTeamNumbers = async (req, res, next) => {
    try {
        const { team_numbers } = req.params;
        const { id_kelas } = req.params;
        if (!team_numbers || isNaN(parseInt(team_numbers))) {
            return res.status(400).json({ error: "Invalid team_numbers parameter" });
        }
        const team_numbers_number = parseInt(team_numbers);
        if (team_numbers_number <= 0) {
            return res.status(400).json({ error: "team_numbers must be a positive number" });
        }
        const newKelompokData = { ...req.body, id_kelas: id_kelas };
        const akun = await kelompokServices.createRandomAccountByTeamNumbers(team_numbers_number, newKelompokData);
        return res.status(201).send(akun);
    }
    catch (error) {
        return next(error);
    }
};

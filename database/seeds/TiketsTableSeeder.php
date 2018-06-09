<?php

use Illuminate\Database\Seeder;

class TiketsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
 
        for ($i = 0; $i < 50; $i++) {
            Tiket::create([
                'nombre' => $faker->title,
                'descripcion' => $faker->paragraph,
                'estado' => $faker->randomNumber(2)
            ]);
        }
    }
}

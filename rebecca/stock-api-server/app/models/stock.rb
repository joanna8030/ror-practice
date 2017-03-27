class Stock < ActiveRecord::Base
  attr_accessible :rank, :stock_code, :stock_name, :opening_price, :highest_price,
    :lowest_price, :ytd_closing_price, :closing_price, :turnover, :change, :change_range

  extend StockApi

  def self.load_data
    if !Stock.where('created_at >= ?', Date.today.beginning_of_day).empty?
      puts 'data is already in db'
    else
      stock_data = crawl_data

      stock_data.each do |stock|
        data = Stock.new(stock)
        if data.save
        else
          puts 'ERROR MSG:' + data.errors.full_messages
        end
      end
    end
  end

  def self.to_csv
    attributes = %w(rank stock_code stock_name opening_price highest_price
      lowest_price ytd_closing_price closing_price turnover change change_range)

    CSV.generate do |csv|
      csv << attributes

      all.each do |stock|
        csv << attributes.map { |attr| stock.send(attr) }
      end
    end
  end
end
